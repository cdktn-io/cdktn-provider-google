# `dataprocGdcApplicationEnvironment` Submodule <a name="`dataprocGdcApplicationEnvironment` Submodule" id="@cdktn/provider-google.dataprocGdcApplicationEnvironment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataprocGdcApplicationEnvironment <a name="DataprocGdcApplicationEnvironment" id="@cdktn/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/dataproc_gdc_application_environment google_dataproc_gdc_application_environment}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.Initializer"></a>

```typescript
import { dataprocGdcApplicationEnvironment } from '@cdktn/provider-google'

new dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment(scope: Construct, id: string, config: DataprocGdcApplicationEnvironmentConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentConfig">DataprocGdcApplicationEnvironmentConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentConfig">DataprocGdcApplicationEnvironmentConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.putSparkApplicationEnvironmentConfig">putSparkApplicationEnvironmentConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.resetAnnotations">resetAnnotations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.resetApplicationEnvironmentId">resetApplicationEnvironmentId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.resetNamespace">resetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.resetSparkApplicationEnvironmentConfig">resetSparkApplicationEnvironmentConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putSparkApplicationEnvironmentConfig` <a name="putSparkApplicationEnvironmentConfig" id="@cdktn/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.putSparkApplicationEnvironmentConfig"></a>

```typescript
public putSparkApplicationEnvironmentConfig(value: DataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.putSparkApplicationEnvironmentConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfig">DataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfig</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.putTimeouts"></a>

```typescript
public putTimeouts(value: DataprocGdcApplicationEnvironmentTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentTimeouts">DataprocGdcApplicationEnvironmentTimeouts</a>

---

##### `resetAnnotations` <a name="resetAnnotations" id="@cdktn/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.resetAnnotations"></a>

```typescript
public resetAnnotations(): void
```

##### `resetApplicationEnvironmentId` <a name="resetApplicationEnvironmentId" id="@cdktn/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.resetApplicationEnvironmentId"></a>

```typescript
public resetApplicationEnvironmentId(): void
```

##### `resetDisplayName` <a name="resetDisplayName" id="@cdktn/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.resetDisplayName"></a>

```typescript
public resetDisplayName(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLabels` <a name="resetLabels" id="@cdktn/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.resetLabels"></a>

```typescript
public resetLabels(): void
```

##### `resetNamespace` <a name="resetNamespace" id="@cdktn/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.resetNamespace"></a>

```typescript
public resetNamespace(): void
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetSparkApplicationEnvironmentConfig` <a name="resetSparkApplicationEnvironmentConfig" id="@cdktn/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.resetSparkApplicationEnvironmentConfig"></a>

```typescript
public resetSparkApplicationEnvironmentConfig(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataprocGdcApplicationEnvironment resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.isConstruct"></a>

```typescript
import { dataprocGdcApplicationEnvironment } from '@cdktn/provider-google'

dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.isTerraformElement"></a>

```typescript
import { dataprocGdcApplicationEnvironment } from '@cdktn/provider-google'

dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.isTerraformResource"></a>

```typescript
import { dataprocGdcApplicationEnvironment } from '@cdktn/provider-google'

dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.generateConfigForImport"></a>

```typescript
import { dataprocGdcApplicationEnvironment } from '@cdktn/provider-google'

dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataprocGdcApplicationEnvironment resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataprocGdcApplicationEnvironment to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataprocGdcApplicationEnvironment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/dataproc_gdc_application_environment#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataprocGdcApplicationEnvironment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.property.createTime">createTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.property.effectiveAnnotations">effectiveAnnotations</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.property.effectiveLabels">effectiveLabels</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.property.sparkApplicationEnvironmentConfig">sparkApplicationEnvironmentConfig</a></code> | <code><a href="#@cdktn/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfigOutputReference">DataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.property.terraformLabels">terraformLabels</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentTimeoutsOutputReference">DataprocGdcApplicationEnvironmentTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.property.uid">uid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.property.updateTime">updateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.property.annotationsInput">annotationsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.property.applicationEnvironmentIdInput">applicationEnvironmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.property.labelsInput">labelsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.property.namespaceInput">namespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.property.serviceinstanceInput">serviceinstanceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.property.sparkApplicationEnvironmentConfigInput">sparkApplicationEnvironmentConfigInput</a></code> | <code><a href="#@cdktn/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfig">DataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentTimeouts">DataprocGdcApplicationEnvironmentTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.property.annotations">annotations</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.property.applicationEnvironmentId">applicationEnvironmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.property.namespace">namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.property.serviceinstance">serviceinstance</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktn/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.property.createTime"></a>

```typescript
public readonly createTime: string;
```

- *Type:* string

---

##### `effectiveAnnotations`<sup>Required</sup> <a name="effectiveAnnotations" id="@cdktn/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.property.effectiveAnnotations"></a>

```typescript
public readonly effectiveAnnotations: StringMap;
```

- *Type:* cdktn.StringMap

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktn/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.property.effectiveLabels"></a>

```typescript
public readonly effectiveLabels: StringMap;
```

- *Type:* cdktn.StringMap

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `sparkApplicationEnvironmentConfig`<sup>Required</sup> <a name="sparkApplicationEnvironmentConfig" id="@cdktn/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.property.sparkApplicationEnvironmentConfig"></a>

```typescript
public readonly sparkApplicationEnvironmentConfig: DataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfigOutputReference">DataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfigOutputReference</a>

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktn/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.property.terraformLabels"></a>

```typescript
public readonly terraformLabels: StringMap;
```

- *Type:* cdktn.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.property.timeouts"></a>

```typescript
public readonly timeouts: DataprocGdcApplicationEnvironmentTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentTimeoutsOutputReference">DataprocGdcApplicationEnvironmentTimeoutsOutputReference</a>

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktn/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.property.uid"></a>

```typescript
public readonly uid: string;
```

- *Type:* string

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktn/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.property.updateTime"></a>

```typescript
public readonly updateTime: string;
```

- *Type:* string

---

##### `annotationsInput`<sup>Optional</sup> <a name="annotationsInput" id="@cdktn/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.property.annotationsInput"></a>

```typescript
public readonly annotationsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `applicationEnvironmentIdInput`<sup>Optional</sup> <a name="applicationEnvironmentIdInput" id="@cdktn/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.property.applicationEnvironmentIdInput"></a>

```typescript
public readonly applicationEnvironmentIdInput: string;
```

- *Type:* string

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktn/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktn/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.property.labelsInput"></a>

```typescript
public readonly labelsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktn/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.property.namespaceInput"></a>

```typescript
public readonly namespaceInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `serviceinstanceInput`<sup>Optional</sup> <a name="serviceinstanceInput" id="@cdktn/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.property.serviceinstanceInput"></a>

```typescript
public readonly serviceinstanceInput: string;
```

- *Type:* string

---

##### `sparkApplicationEnvironmentConfigInput`<sup>Optional</sup> <a name="sparkApplicationEnvironmentConfigInput" id="@cdktn/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.property.sparkApplicationEnvironmentConfigInput"></a>

```typescript
public readonly sparkApplicationEnvironmentConfigInput: DataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfig;
```

- *Type:* <a href="#@cdktn/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfig">DataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfig</a>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | DataprocGdcApplicationEnvironmentTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentTimeouts">DataprocGdcApplicationEnvironmentTimeouts</a>

---

##### `annotations`<sup>Required</sup> <a name="annotations" id="@cdktn/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.property.annotations"></a>

```typescript
public readonly annotations: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `applicationEnvironmentId`<sup>Required</sup> <a name="applicationEnvironmentId" id="@cdktn/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.property.applicationEnvironmentId"></a>

```typescript
public readonly applicationEnvironmentId: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktn/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktn/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `serviceinstance`<sup>Required</sup> <a name="serviceinstance" id="@cdktn/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.property.serviceinstance"></a>

```typescript
public readonly serviceinstance: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataprocGdcApplicationEnvironmentConfig <a name="DataprocGdcApplicationEnvironmentConfig" id="@cdktn/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentConfig.Initializer"></a>

```typescript
import { dataprocGdcApplicationEnvironment } from '@cdktn/provider-google'

const dataprocGdcApplicationEnvironmentConfig: dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentConfig.property.location">location</a></code> | <code>string</code> | The location of the application environment. |
| <code><a href="#@cdktn/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentConfig.property.serviceinstance">serviceinstance</a></code> | <code>string</code> | The id of the service instance to which this application environment belongs. |
| <code><a href="#@cdktn/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentConfig.property.annotations">annotations</a></code> | <code>{[ key: string ]: string}</code> | The annotations to associate with this application environment. |
| <code><a href="#@cdktn/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentConfig.property.applicationEnvironmentId">applicationEnvironmentId</a></code> | <code>string</code> | The id of the application environment. |
| <code><a href="#@cdktn/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentConfig.property.displayName">displayName</a></code> | <code>string</code> | User-provided human-readable name to be used in user interfaces. |
| <code><a href="#@cdktn/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/dataproc_gdc_application_environment#id DataprocGdcApplicationEnvironment#id}. |
| <code><a href="#@cdktn/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentConfig.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | The labels to associate with this application environment. Labels may be used for filtering and billing tracking. |
| <code><a href="#@cdktn/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentConfig.property.namespace">namespace</a></code> | <code>string</code> | The name of the namespace in which to create this ApplicationEnvironment. This namespace must already exist in the cluster. |
| <code><a href="#@cdktn/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/dataproc_gdc_application_environment#project DataprocGdcApplicationEnvironment#project}. |
| <code><a href="#@cdktn/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentConfig.property.sparkApplicationEnvironmentConfig">sparkApplicationEnvironmentConfig</a></code> | <code><a href="#@cdktn/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfig">DataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfig</a></code> | spark_application_environment_config block. |
| <code><a href="#@cdktn/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentTimeouts">DataprocGdcApplicationEnvironmentTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

The location of the application environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/dataproc_gdc_application_environment#location DataprocGdcApplicationEnvironment#location}

---

##### `serviceinstance`<sup>Required</sup> <a name="serviceinstance" id="@cdktn/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentConfig.property.serviceinstance"></a>

```typescript
public readonly serviceinstance: string;
```

- *Type:* string

The id of the service instance to which this application environment belongs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/dataproc_gdc_application_environment#serviceinstance DataprocGdcApplicationEnvironment#serviceinstance}

---

##### `annotations`<sup>Optional</sup> <a name="annotations" id="@cdktn/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentConfig.property.annotations"></a>

```typescript
public readonly annotations: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

The annotations to associate with this application environment.

Annotations may be used to store client information, but are not used by the server.

**Note**: This field is non-authoritative, and will only manage the annotations present in your configuration.
Please refer to the field 'effective_annotations' for all of the annotations present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/dataproc_gdc_application_environment#annotations DataprocGdcApplicationEnvironment#annotations}

---

##### `applicationEnvironmentId`<sup>Optional</sup> <a name="applicationEnvironmentId" id="@cdktn/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentConfig.property.applicationEnvironmentId"></a>

```typescript
public readonly applicationEnvironmentId: string;
```

- *Type:* string

The id of the application environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/dataproc_gdc_application_environment#application_environment_id DataprocGdcApplicationEnvironment#application_environment_id}

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktn/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

User-provided human-readable name to be used in user interfaces.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/dataproc_gdc_application_environment#display_name DataprocGdcApplicationEnvironment#display_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/dataproc_gdc_application_environment#id DataprocGdcApplicationEnvironment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentConfig.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

The labels to associate with this application environment. Labels may be used for filtering and billing tracking.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/dataproc_gdc_application_environment#labels DataprocGdcApplicationEnvironment#labels}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktn/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentConfig.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

The name of the namespace in which to create this ApplicationEnvironment. This namespace must already exist in the cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/dataproc_gdc_application_environment#namespace DataprocGdcApplicationEnvironment#namespace}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/dataproc_gdc_application_environment#project DataprocGdcApplicationEnvironment#project}.

---

##### `sparkApplicationEnvironmentConfig`<sup>Optional</sup> <a name="sparkApplicationEnvironmentConfig" id="@cdktn/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentConfig.property.sparkApplicationEnvironmentConfig"></a>

```typescript
public readonly sparkApplicationEnvironmentConfig: DataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfig;
```

- *Type:* <a href="#@cdktn/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfig">DataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfig</a>

spark_application_environment_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/dataproc_gdc_application_environment#spark_application_environment_config DataprocGdcApplicationEnvironment#spark_application_environment_config}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentConfig.property.timeouts"></a>

```typescript
public readonly timeouts: DataprocGdcApplicationEnvironmentTimeouts;
```

- *Type:* <a href="#@cdktn/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentTimeouts">DataprocGdcApplicationEnvironmentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/dataproc_gdc_application_environment#timeouts DataprocGdcApplicationEnvironment#timeouts}

---

### DataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfig <a name="DataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfig" id="@cdktn/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfig.Initializer"></a>

```typescript
import { dataprocGdcApplicationEnvironment } from '@cdktn/provider-google'

const dataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfig: dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfig.property.defaultProperties">defaultProperties</a></code> | <code>{[ key: string ]: string}</code> | A map of default Spark properties to apply to workloads in this application environment. |
| <code><a href="#@cdktn/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfig.property.defaultVersion">defaultVersion</a></code> | <code>string</code> | The default Dataproc version to use for applications submitted to this application environment. |

---

##### `defaultProperties`<sup>Optional</sup> <a name="defaultProperties" id="@cdktn/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfig.property.defaultProperties"></a>

```typescript
public readonly defaultProperties: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

A map of default Spark properties to apply to workloads in this application environment.

These defaults may be overridden by per-application properties.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/dataproc_gdc_application_environment#default_properties DataprocGdcApplicationEnvironment#default_properties}

---

##### `defaultVersion`<sup>Optional</sup> <a name="defaultVersion" id="@cdktn/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfig.property.defaultVersion"></a>

```typescript
public readonly defaultVersion: string;
```

- *Type:* string

The default Dataproc version to use for applications submitted to this application environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/dataproc_gdc_application_environment#default_version DataprocGdcApplicationEnvironment#default_version}

---

### DataprocGdcApplicationEnvironmentTimeouts <a name="DataprocGdcApplicationEnvironmentTimeouts" id="@cdktn/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentTimeouts.Initializer"></a>

```typescript
import { dataprocGdcApplicationEnvironment } from '@cdktn/provider-google'

const dataprocGdcApplicationEnvironmentTimeouts: dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/dataproc_gdc_application_environment#create DataprocGdcApplicationEnvironment#create}. |
| <code><a href="#@cdktn/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/dataproc_gdc_application_environment#delete DataprocGdcApplicationEnvironment#delete}. |
| <code><a href="#@cdktn/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/dataproc_gdc_application_environment#update DataprocGdcApplicationEnvironment#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/dataproc_gdc_application_environment#create DataprocGdcApplicationEnvironment#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/dataproc_gdc_application_environment#delete DataprocGdcApplicationEnvironment#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/dataproc_gdc_application_environment#update DataprocGdcApplicationEnvironment#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfigOutputReference <a name="DataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfigOutputReference" id="@cdktn/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfigOutputReference.Initializer"></a>

```typescript
import { dataprocGdcApplicationEnvironment } from '@cdktn/provider-google'

new dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfigOutputReference.resetDefaultProperties">resetDefaultProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfigOutputReference.resetDefaultVersion">resetDefaultVersion</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDefaultProperties` <a name="resetDefaultProperties" id="@cdktn/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfigOutputReference.resetDefaultProperties"></a>

```typescript
public resetDefaultProperties(): void
```

##### `resetDefaultVersion` <a name="resetDefaultVersion" id="@cdktn/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfigOutputReference.resetDefaultVersion"></a>

```typescript
public resetDefaultVersion(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfigOutputReference.property.defaultPropertiesInput">defaultPropertiesInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfigOutputReference.property.defaultVersionInput">defaultVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfigOutputReference.property.defaultProperties">defaultProperties</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfigOutputReference.property.defaultVersion">defaultVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfig">DataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `defaultPropertiesInput`<sup>Optional</sup> <a name="defaultPropertiesInput" id="@cdktn/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfigOutputReference.property.defaultPropertiesInput"></a>

```typescript
public readonly defaultPropertiesInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `defaultVersionInput`<sup>Optional</sup> <a name="defaultVersionInput" id="@cdktn/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfigOutputReference.property.defaultVersionInput"></a>

```typescript
public readonly defaultVersionInput: string;
```

- *Type:* string

---

##### `defaultProperties`<sup>Required</sup> <a name="defaultProperties" id="@cdktn/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfigOutputReference.property.defaultProperties"></a>

```typescript
public readonly defaultProperties: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `defaultVersion`<sup>Required</sup> <a name="defaultVersion" id="@cdktn/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfigOutputReference.property.defaultVersion"></a>

```typescript
public readonly defaultVersion: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfig;
```

- *Type:* <a href="#@cdktn/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfig">DataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfig</a>

---


### DataprocGdcApplicationEnvironmentTimeoutsOutputReference <a name="DataprocGdcApplicationEnvironmentTimeoutsOutputReference" id="@cdktn/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentTimeoutsOutputReference.Initializer"></a>

```typescript
import { dataprocGdcApplicationEnvironment } from '@cdktn/provider-google'

new dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentTimeouts">DataprocGdcApplicationEnvironmentTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataprocGdcApplicationEnvironmentTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentTimeouts">DataprocGdcApplicationEnvironmentTimeouts</a>

---



