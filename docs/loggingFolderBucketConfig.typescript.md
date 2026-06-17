# `loggingFolderBucketConfig` Submodule <a name="`loggingFolderBucketConfig` Submodule" id="@cdktn/provider-google.loggingFolderBucketConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LoggingFolderBucketConfig <a name="LoggingFolderBucketConfig" id="@cdktn/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfig"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/logging_folder_bucket_config google_logging_folder_bucket_config}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfig.Initializer"></a>

```typescript
import { loggingFolderBucketConfig } from '@cdktn/provider-google'

new loggingFolderBucketConfig.LoggingFolderBucketConfig(scope: Construct, id: string, config: LoggingFolderBucketConfigConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfig.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfig.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfig.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfigConfig">LoggingFolderBucketConfigConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfig.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfig.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfig.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfigConfig">LoggingFolderBucketConfigConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfig.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfig.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfig.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfig.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfig.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfig.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfig.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfig.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfig.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfig.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfig.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfig.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfig.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfig.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfig.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfig.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfig.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfig.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfig.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfig.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfig.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfig.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfig.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfig.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfig.putCmekSettings">putCmekSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfig.putIndexConfigs">putIndexConfigs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfig.resetCmekSettings">resetCmekSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfig.resetDeletionPolicy">resetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfig.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfig.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfig.resetIndexConfigs">resetIndexConfigs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfig.resetRetentionDays">resetRetentionDays</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfig.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfig.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfig.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfig.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfig.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfig.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfig.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfig.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfig.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfig.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfig.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfig.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfig.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfig.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfig.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfig.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfig.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfig.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfig.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfig.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfig.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfig.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfig.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfig.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfig.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfig.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfig.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfig.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfig.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfig.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfig.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfig.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfig.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfig.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putCmekSettings` <a name="putCmekSettings" id="@cdktn/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfig.putCmekSettings"></a>

```typescript
public putCmekSettings(value: LoggingFolderBucketConfigCmekSettings): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfig.putCmekSettings.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfigCmekSettings">LoggingFolderBucketConfigCmekSettings</a>

---

##### `putIndexConfigs` <a name="putIndexConfigs" id="@cdktn/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfig.putIndexConfigs"></a>

```typescript
public putIndexConfigs(value: IResolvable | LoggingFolderBucketConfigIndexConfigs[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfig.putIndexConfigs.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfigIndexConfigs">LoggingFolderBucketConfigIndexConfigs</a>[]

---

##### `resetCmekSettings` <a name="resetCmekSettings" id="@cdktn/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfig.resetCmekSettings"></a>

```typescript
public resetCmekSettings(): void
```

##### `resetDeletionPolicy` <a name="resetDeletionPolicy" id="@cdktn/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfig.resetDeletionPolicy"></a>

```typescript
public resetDeletionPolicy(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfig.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfig.resetId"></a>

```typescript
public resetId(): void
```

##### `resetIndexConfigs` <a name="resetIndexConfigs" id="@cdktn/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfig.resetIndexConfigs"></a>

```typescript
public resetIndexConfigs(): void
```

##### `resetRetentionDays` <a name="resetRetentionDays" id="@cdktn/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfig.resetRetentionDays"></a>

```typescript
public resetRetentionDays(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfig.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfig.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfig.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfig.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a LoggingFolderBucketConfig resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfig.isConstruct"></a>

```typescript
import { loggingFolderBucketConfig } from '@cdktn/provider-google'

loggingFolderBucketConfig.LoggingFolderBucketConfig.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfig.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfig.isTerraformElement"></a>

```typescript
import { loggingFolderBucketConfig } from '@cdktn/provider-google'

loggingFolderBucketConfig.LoggingFolderBucketConfig.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfig.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfig.isTerraformResource"></a>

```typescript
import { loggingFolderBucketConfig } from '@cdktn/provider-google'

loggingFolderBucketConfig.LoggingFolderBucketConfig.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfig.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfig.generateConfigForImport"></a>

```typescript
import { loggingFolderBucketConfig } from '@cdktn/provider-google'

loggingFolderBucketConfig.LoggingFolderBucketConfig.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a LoggingFolderBucketConfig resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the LoggingFolderBucketConfig to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing LoggingFolderBucketConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/logging_folder_bucket_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the LoggingFolderBucketConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfig.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfig.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfig.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfig.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfig.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfig.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfig.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfig.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfig.property.cmekSettings">cmekSettings</a></code> | <code><a href="#@cdktn/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfigCmekSettingsOutputReference">LoggingFolderBucketConfigCmekSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfig.property.indexConfigs">indexConfigs</a></code> | <code><a href="#@cdktn/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfigIndexConfigsList">LoggingFolderBucketConfigIndexConfigsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfig.property.lifecycleState">lifecycleState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfig.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfig.property.bucketIdInput">bucketIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfig.property.cmekSettingsInput">cmekSettingsInput</a></code> | <code><a href="#@cdktn/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfigCmekSettings">LoggingFolderBucketConfigCmekSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfig.property.deletionPolicyInput">deletionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfig.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfig.property.folderInput">folderInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfig.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfig.property.indexConfigsInput">indexConfigsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfigIndexConfigs">LoggingFolderBucketConfigIndexConfigs</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfig.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfig.property.retentionDaysInput">retentionDaysInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfig.property.bucketId">bucketId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfig.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfig.property.folder">folder</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfig.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfig.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfig.property.retentionDays">retentionDays</a></code> | <code>number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfig.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfig.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfig.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfig.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfig.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfig.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfig.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `cmekSettings`<sup>Required</sup> <a name="cmekSettings" id="@cdktn/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfig.property.cmekSettings"></a>

```typescript
public readonly cmekSettings: LoggingFolderBucketConfigCmekSettingsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfigCmekSettingsOutputReference">LoggingFolderBucketConfigCmekSettingsOutputReference</a>

---

##### `indexConfigs`<sup>Required</sup> <a name="indexConfigs" id="@cdktn/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfig.property.indexConfigs"></a>

```typescript
public readonly indexConfigs: LoggingFolderBucketConfigIndexConfigsList;
```

- *Type:* <a href="#@cdktn/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfigIndexConfigsList">LoggingFolderBucketConfigIndexConfigsList</a>

---

##### `lifecycleState`<sup>Required</sup> <a name="lifecycleState" id="@cdktn/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfig.property.lifecycleState"></a>

```typescript
public readonly lifecycleState: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `bucketIdInput`<sup>Optional</sup> <a name="bucketIdInput" id="@cdktn/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfig.property.bucketIdInput"></a>

```typescript
public readonly bucketIdInput: string;
```

- *Type:* string

---

##### `cmekSettingsInput`<sup>Optional</sup> <a name="cmekSettingsInput" id="@cdktn/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfig.property.cmekSettingsInput"></a>

```typescript
public readonly cmekSettingsInput: LoggingFolderBucketConfigCmekSettings;
```

- *Type:* <a href="#@cdktn/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfigCmekSettings">LoggingFolderBucketConfigCmekSettings</a>

---

##### `deletionPolicyInput`<sup>Optional</sup> <a name="deletionPolicyInput" id="@cdktn/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfig.property.deletionPolicyInput"></a>

```typescript
public readonly deletionPolicyInput: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfig.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `folderInput`<sup>Optional</sup> <a name="folderInput" id="@cdktn/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfig.property.folderInput"></a>

```typescript
public readonly folderInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfig.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `indexConfigsInput`<sup>Optional</sup> <a name="indexConfigsInput" id="@cdktn/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfig.property.indexConfigsInput"></a>

```typescript
public readonly indexConfigsInput: IResolvable | LoggingFolderBucketConfigIndexConfigs[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfigIndexConfigs">LoggingFolderBucketConfigIndexConfigs</a>[]

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfig.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `retentionDaysInput`<sup>Optional</sup> <a name="retentionDaysInput" id="@cdktn/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfig.property.retentionDaysInput"></a>

```typescript
public readonly retentionDaysInput: number;
```

- *Type:* number

---

##### `bucketId`<sup>Required</sup> <a name="bucketId" id="@cdktn/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfig.property.bucketId"></a>

```typescript
public readonly bucketId: string;
```

- *Type:* string

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfig.property.deletionPolicy"></a>

```typescript
public readonly deletionPolicy: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `folder`<sup>Required</sup> <a name="folder" id="@cdktn/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfig.property.folder"></a>

```typescript
public readonly folder: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `retentionDays`<sup>Required</sup> <a name="retentionDays" id="@cdktn/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfig.property.retentionDays"></a>

```typescript
public readonly retentionDays: number;
```

- *Type:* number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfig.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfig.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### LoggingFolderBucketConfigCmekSettings <a name="LoggingFolderBucketConfigCmekSettings" id="@cdktn/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfigCmekSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfigCmekSettings.Initializer"></a>

```typescript
import { loggingFolderBucketConfig } from '@cdktn/provider-google'

const loggingFolderBucketConfigCmekSettings: loggingFolderBucketConfig.LoggingFolderBucketConfigCmekSettings = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfigCmekSettings.property.kmsKeyName">kmsKeyName</a></code> | <code>string</code> | The resource name for the configured Cloud KMS key. |

---

##### `kmsKeyName`<sup>Required</sup> <a name="kmsKeyName" id="@cdktn/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfigCmekSettings.property.kmsKeyName"></a>

```typescript
public readonly kmsKeyName: string;
```

- *Type:* string

The resource name for the configured Cloud KMS key.

KMS key name format:
"projects/[PROJECT_ID]/locations/[LOCATION]/keyRings/[KEYRING]/cryptoKeys/[KEY]"
To enable CMEK for the bucket, set this field to a valid kmsKeyName for which the associated service account has the required cloudkms.cryptoKeyEncrypterDecrypter roles assigned for the key.
The Cloud KMS key used by the bucket can be updated by changing the kmsKeyName to a new valid key name. Encryption operations that are in progress will be completed with the key that was in use when they started. Decryption operations will be completed using the key that was used at the time of encryption unless access to that key has been revoked.
See [Enabling CMEK for Logging Buckets](https://cloud.google.com/logging/docs/routing/managed-encryption-storage) for more information.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/logging_folder_bucket_config#kms_key_name LoggingFolderBucketConfig#kms_key_name}

---

### LoggingFolderBucketConfigConfig <a name="LoggingFolderBucketConfigConfig" id="@cdktn/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfigConfig.Initializer"></a>

```typescript
import { loggingFolderBucketConfig } from '@cdktn/provider-google'

const loggingFolderBucketConfigConfig: loggingFolderBucketConfig.LoggingFolderBucketConfigConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfigConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfigConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfigConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfigConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfigConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfigConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfigConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfigConfig.property.bucketId">bucketId</a></code> | <code>string</code> | The name of the logging bucket. Logging automatically creates two log buckets: _Required and _Default. |
| <code><a href="#@cdktn/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfigConfig.property.folder">folder</a></code> | <code>string</code> | The parent resource that contains the logging bucket. |
| <code><a href="#@cdktn/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfigConfig.property.location">location</a></code> | <code>string</code> | The location of the bucket. |
| <code><a href="#@cdktn/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfigConfig.property.cmekSettings">cmekSettings</a></code> | <code><a href="#@cdktn/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfigCmekSettings">LoggingFolderBucketConfigCmekSettings</a></code> | cmek_settings block. |
| <code><a href="#@cdktn/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfigConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfigConfig.property.description">description</a></code> | <code>string</code> | An optional description for this bucket. |
| <code><a href="#@cdktn/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfigConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/logging_folder_bucket_config#id LoggingFolderBucketConfig#id}. |
| <code><a href="#@cdktn/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfigConfig.property.indexConfigs">indexConfigs</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfigIndexConfigs">LoggingFolderBucketConfigIndexConfigs</a>[]</code> | index_configs block. |
| <code><a href="#@cdktn/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfigConfig.property.retentionDays">retentionDays</a></code> | <code>number</code> | Logs will be retained by default for this amount of time, after which they will automatically be deleted. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfigConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfigConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfigConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfigConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfigConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfigConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfigConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `bucketId`<sup>Required</sup> <a name="bucketId" id="@cdktn/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfigConfig.property.bucketId"></a>

```typescript
public readonly bucketId: string;
```

- *Type:* string

The name of the logging bucket. Logging automatically creates two log buckets: _Required and _Default.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/logging_folder_bucket_config#bucket_id LoggingFolderBucketConfig#bucket_id}

---

##### `folder`<sup>Required</sup> <a name="folder" id="@cdktn/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfigConfig.property.folder"></a>

```typescript
public readonly folder: string;
```

- *Type:* string

The parent resource that contains the logging bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/logging_folder_bucket_config#folder LoggingFolderBucketConfig#folder}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfigConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

The location of the bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/logging_folder_bucket_config#location LoggingFolderBucketConfig#location}

---

##### `cmekSettings`<sup>Optional</sup> <a name="cmekSettings" id="@cdktn/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfigConfig.property.cmekSettings"></a>

```typescript
public readonly cmekSettings: LoggingFolderBucketConfigCmekSettings;
```

- *Type:* <a href="#@cdktn/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfigCmekSettings">LoggingFolderBucketConfigCmekSettings</a>

cmek_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/logging_folder_bucket_config#cmek_settings LoggingFolderBucketConfig#cmek_settings}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfigConfig.property.deletionPolicy"></a>

```typescript
public readonly deletionPolicy: string;
```

- *Type:* string

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.


Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/logging_folder_bucket_config#deletion_policy LoggingFolderBucketConfig#deletion_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfigConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

An optional description for this bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/logging_folder_bucket_config#description LoggingFolderBucketConfig#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfigConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/logging_folder_bucket_config#id LoggingFolderBucketConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `indexConfigs`<sup>Optional</sup> <a name="indexConfigs" id="@cdktn/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfigConfig.property.indexConfigs"></a>

```typescript
public readonly indexConfigs: IResolvable | LoggingFolderBucketConfigIndexConfigs[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfigIndexConfigs">LoggingFolderBucketConfigIndexConfigs</a>[]

index_configs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/logging_folder_bucket_config#index_configs LoggingFolderBucketConfig#index_configs}

---

##### `retentionDays`<sup>Optional</sup> <a name="retentionDays" id="@cdktn/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfigConfig.property.retentionDays"></a>

```typescript
public readonly retentionDays: number;
```

- *Type:* number

Logs will be retained by default for this amount of time, after which they will automatically be deleted.

The minimum retention period is 1 day. If this value is set to zero at bucket creation time, the default time of 30 days will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/logging_folder_bucket_config#retention_days LoggingFolderBucketConfig#retention_days}

---

### LoggingFolderBucketConfigIndexConfigs <a name="LoggingFolderBucketConfigIndexConfigs" id="@cdktn/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfigIndexConfigs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfigIndexConfigs.Initializer"></a>

```typescript
import { loggingFolderBucketConfig } from '@cdktn/provider-google'

const loggingFolderBucketConfigIndexConfigs: loggingFolderBucketConfig.LoggingFolderBucketConfigIndexConfigs = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfigIndexConfigs.property.fieldPath">fieldPath</a></code> | <code>string</code> | The LogEntry field path to index. |
| <code><a href="#@cdktn/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfigIndexConfigs.property.type">type</a></code> | <code>string</code> | The type of data in this index Note that some paths are automatically indexed, and other paths are not eligible for indexing. |

---

##### `fieldPath`<sup>Required</sup> <a name="fieldPath" id="@cdktn/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfigIndexConfigs.property.fieldPath"></a>

```typescript
public readonly fieldPath: string;
```

- *Type:* string

The LogEntry field path to index.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/logging_folder_bucket_config#field_path LoggingFolderBucketConfig#field_path}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfigIndexConfigs.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

The type of data in this index Note that some paths are automatically indexed, and other paths are not eligible for indexing.

See [indexing documentation]( https://cloud.google.com/logging/docs/view/advanced-queries#indexed-fields) for details.
For example: jsonPayload.request.status

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/logging_folder_bucket_config#type LoggingFolderBucketConfig#type}

---

## Classes <a name="Classes" id="Classes"></a>

### LoggingFolderBucketConfigCmekSettingsOutputReference <a name="LoggingFolderBucketConfigCmekSettingsOutputReference" id="@cdktn/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfigCmekSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfigCmekSettingsOutputReference.Initializer"></a>

```typescript
import { loggingFolderBucketConfig } from '@cdktn/provider-google'

new loggingFolderBucketConfig.LoggingFolderBucketConfigCmekSettingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfigCmekSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfigCmekSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfigCmekSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfigCmekSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfigCmekSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfigCmekSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfigCmekSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfigCmekSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfigCmekSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfigCmekSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfigCmekSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfigCmekSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfigCmekSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfigCmekSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfigCmekSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfigCmekSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfigCmekSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfigCmekSettingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfigCmekSettingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfigCmekSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfigCmekSettingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfigCmekSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfigCmekSettingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfigCmekSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfigCmekSettingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfigCmekSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfigCmekSettingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfigCmekSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfigCmekSettingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfigCmekSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfigCmekSettingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfigCmekSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfigCmekSettingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfigCmekSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfigCmekSettingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfigCmekSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfigCmekSettingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfigCmekSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfigCmekSettingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfigCmekSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfigCmekSettingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfigCmekSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfigCmekSettingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfigCmekSettingsOutputReference.property.kmsKeyVersionName">kmsKeyVersionName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfigCmekSettingsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfigCmekSettingsOutputReference.property.serviceAccountId">serviceAccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfigCmekSettingsOutputReference.property.kmsKeyNameInput">kmsKeyNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfigCmekSettingsOutputReference.property.kmsKeyName">kmsKeyName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfigCmekSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfigCmekSettings">LoggingFolderBucketConfigCmekSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfigCmekSettingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfigCmekSettingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `kmsKeyVersionName`<sup>Required</sup> <a name="kmsKeyVersionName" id="@cdktn/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfigCmekSettingsOutputReference.property.kmsKeyVersionName"></a>

```typescript
public readonly kmsKeyVersionName: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfigCmekSettingsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `serviceAccountId`<sup>Required</sup> <a name="serviceAccountId" id="@cdktn/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfigCmekSettingsOutputReference.property.serviceAccountId"></a>

```typescript
public readonly serviceAccountId: string;
```

- *Type:* string

---

##### `kmsKeyNameInput`<sup>Optional</sup> <a name="kmsKeyNameInput" id="@cdktn/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfigCmekSettingsOutputReference.property.kmsKeyNameInput"></a>

```typescript
public readonly kmsKeyNameInput: string;
```

- *Type:* string

---

##### `kmsKeyName`<sup>Required</sup> <a name="kmsKeyName" id="@cdktn/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfigCmekSettingsOutputReference.property.kmsKeyName"></a>

```typescript
public readonly kmsKeyName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfigCmekSettingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: LoggingFolderBucketConfigCmekSettings;
```

- *Type:* <a href="#@cdktn/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfigCmekSettings">LoggingFolderBucketConfigCmekSettings</a>

---


### LoggingFolderBucketConfigIndexConfigsList <a name="LoggingFolderBucketConfigIndexConfigsList" id="@cdktn/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfigIndexConfigsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfigIndexConfigsList.Initializer"></a>

```typescript
import { loggingFolderBucketConfig } from '@cdktn/provider-google'

new loggingFolderBucketConfig.LoggingFolderBucketConfigIndexConfigsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfigIndexConfigsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfigIndexConfigsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfigIndexConfigsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfigIndexConfigsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfigIndexConfigsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfigIndexConfigsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfigIndexConfigsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfigIndexConfigsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfigIndexConfigsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfigIndexConfigsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfigIndexConfigsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfigIndexConfigsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfigIndexConfigsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfigIndexConfigsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfigIndexConfigsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfigIndexConfigsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfigIndexConfigsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfigIndexConfigsList.get"></a>

```typescript
public get(index: number): LoggingFolderBucketConfigIndexConfigsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfigIndexConfigsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfigIndexConfigsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfigIndexConfigsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfigIndexConfigsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfigIndexConfigs">LoggingFolderBucketConfigIndexConfigs</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfigIndexConfigsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfigIndexConfigsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfigIndexConfigsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LoggingFolderBucketConfigIndexConfigs[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfigIndexConfigs">LoggingFolderBucketConfigIndexConfigs</a>[]

---


### LoggingFolderBucketConfigIndexConfigsOutputReference <a name="LoggingFolderBucketConfigIndexConfigsOutputReference" id="@cdktn/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfigIndexConfigsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfigIndexConfigsOutputReference.Initializer"></a>

```typescript
import { loggingFolderBucketConfig } from '@cdktn/provider-google'

new loggingFolderBucketConfig.LoggingFolderBucketConfigIndexConfigsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfigIndexConfigsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfigIndexConfigsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfigIndexConfigsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfigIndexConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfigIndexConfigsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfigIndexConfigsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfigIndexConfigsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfigIndexConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfigIndexConfigsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfigIndexConfigsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfigIndexConfigsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfigIndexConfigsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfigIndexConfigsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfigIndexConfigsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfigIndexConfigsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfigIndexConfigsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfigIndexConfigsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfigIndexConfigsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfigIndexConfigsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfigIndexConfigsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfigIndexConfigsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfigIndexConfigsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfigIndexConfigsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfigIndexConfigsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfigIndexConfigsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfigIndexConfigsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfigIndexConfigsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfigIndexConfigsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfigIndexConfigsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfigIndexConfigsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfigIndexConfigsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfigIndexConfigsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfigIndexConfigsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfigIndexConfigsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfigIndexConfigsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfigIndexConfigsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfigIndexConfigsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfigIndexConfigsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfigIndexConfigsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfigIndexConfigsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfigIndexConfigsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfigIndexConfigsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfigIndexConfigsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfigIndexConfigsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfigIndexConfigsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfigIndexConfigsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfigIndexConfigsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfigIndexConfigsOutputReference.property.fieldPathInput">fieldPathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfigIndexConfigsOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfigIndexConfigsOutputReference.property.fieldPath">fieldPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfigIndexConfigsOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfigIndexConfigsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfigIndexConfigs">LoggingFolderBucketConfigIndexConfigs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfigIndexConfigsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfigIndexConfigsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `fieldPathInput`<sup>Optional</sup> <a name="fieldPathInput" id="@cdktn/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfigIndexConfigsOutputReference.property.fieldPathInput"></a>

```typescript
public readonly fieldPathInput: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfigIndexConfigsOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `fieldPath`<sup>Required</sup> <a name="fieldPath" id="@cdktn/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfigIndexConfigsOutputReference.property.fieldPath"></a>

```typescript
public readonly fieldPath: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfigIndexConfigsOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfigIndexConfigsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LoggingFolderBucketConfigIndexConfigs;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfigIndexConfigs">LoggingFolderBucketConfigIndexConfigs</a>

---



