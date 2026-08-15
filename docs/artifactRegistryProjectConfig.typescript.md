# `artifactRegistryProjectConfig` Submodule <a name="`artifactRegistryProjectConfig` Submodule" id="@cdktn/provider-google.artifactRegistryProjectConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ArtifactRegistryProjectConfig <a name="ArtifactRegistryProjectConfig" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/artifact_registry_project_config google_artifact_registry_project_config}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.Initializer"></a>

```typescript
import { artifactRegistryProjectConfig } from '@cdktn/provider-google'

new artifactRegistryProjectConfig.ArtifactRegistryProjectConfig(scope: Construct, id: string, config?: ArtifactRegistryProjectConfigConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigConfig">ArtifactRegistryProjectConfigConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigConfig">ArtifactRegistryProjectConfigConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.putPlatformLogsConfig">putPlatformLogsConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.resetLocation">resetLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.resetPlatformLogsConfig">resetPlatformLogsConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putPlatformLogsConfig` <a name="putPlatformLogsConfig" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.putPlatformLogsConfig"></a>

```typescript
public putPlatformLogsConfig(value: ArtifactRegistryProjectConfigPlatformLogsConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.putPlatformLogsConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigPlatformLogsConfig">ArtifactRegistryProjectConfigPlatformLogsConfig</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.putTimeouts"></a>

```typescript
public putTimeouts(value: ArtifactRegistryProjectConfigTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigTimeouts">ArtifactRegistryProjectConfigTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLocation` <a name="resetLocation" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.resetLocation"></a>

```typescript
public resetLocation(): void
```

##### `resetPlatformLogsConfig` <a name="resetPlatformLogsConfig" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.resetPlatformLogsConfig"></a>

```typescript
public resetPlatformLogsConfig(): void
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a ArtifactRegistryProjectConfig resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.isConstruct"></a>

```typescript
import { artifactRegistryProjectConfig } from '@cdktn/provider-google'

artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.isTerraformElement"></a>

```typescript
import { artifactRegistryProjectConfig } from '@cdktn/provider-google'

artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.isTerraformResource"></a>

```typescript
import { artifactRegistryProjectConfig } from '@cdktn/provider-google'

artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.generateConfigForImport"></a>

```typescript
import { artifactRegistryProjectConfig } from '@cdktn/provider-google'

artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a ArtifactRegistryProjectConfig resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ArtifactRegistryProjectConfig to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ArtifactRegistryProjectConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/artifact_registry_project_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the ArtifactRegistryProjectConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.property.platformLogsConfig">platformLogsConfig</a></code> | <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigPlatformLogsConfigOutputReference">ArtifactRegistryProjectConfigPlatformLogsConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigTimeoutsOutputReference">ArtifactRegistryProjectConfigTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.property.platformLogsConfigInput">platformLogsConfigInput</a></code> | <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigPlatformLogsConfig">ArtifactRegistryProjectConfigPlatformLogsConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigTimeouts">ArtifactRegistryProjectConfigTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.property.project">project</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `platformLogsConfig`<sup>Required</sup> <a name="platformLogsConfig" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.property.platformLogsConfig"></a>

```typescript
public readonly platformLogsConfig: ArtifactRegistryProjectConfigPlatformLogsConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigPlatformLogsConfigOutputReference">ArtifactRegistryProjectConfigPlatformLogsConfigOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.property.timeouts"></a>

```typescript
public readonly timeouts: ArtifactRegistryProjectConfigTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigTimeoutsOutputReference">ArtifactRegistryProjectConfigTimeoutsOutputReference</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `platformLogsConfigInput`<sup>Optional</sup> <a name="platformLogsConfigInput" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.property.platformLogsConfigInput"></a>

```typescript
public readonly platformLogsConfigInput: ArtifactRegistryProjectConfigPlatformLogsConfig;
```

- *Type:* <a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigPlatformLogsConfig">ArtifactRegistryProjectConfigPlatformLogsConfig</a>

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | ArtifactRegistryProjectConfigTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigTimeouts">ArtifactRegistryProjectConfigTimeouts</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfig.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ArtifactRegistryProjectConfigConfig <a name="ArtifactRegistryProjectConfigConfig" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigConfig.Initializer"></a>

```typescript
import { artifactRegistryProjectConfig } from '@cdktn/provider-google'

const artifactRegistryProjectConfigConfig: artifactRegistryProjectConfig.ArtifactRegistryProjectConfigConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/artifact_registry_project_config#id ArtifactRegistryProjectConfig#id}. |
| <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigConfig.property.location">location</a></code> | <code>string</code> | The name of the location this config is located in. |
| <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigConfig.property.platformLogsConfig">platformLogsConfig</a></code> | <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigPlatformLogsConfig">ArtifactRegistryProjectConfigPlatformLogsConfig</a></code> | platform_logs_config block. |
| <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/artifact_registry_project_config#project ArtifactRegistryProjectConfig#project}. |
| <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigTimeouts">ArtifactRegistryProjectConfigTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/artifact_registry_project_config#id ArtifactRegistryProjectConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

The name of the location this config is located in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/artifact_registry_project_config#location ArtifactRegistryProjectConfig#location}

---

##### `platformLogsConfig`<sup>Optional</sup> <a name="platformLogsConfig" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigConfig.property.platformLogsConfig"></a>

```typescript
public readonly platformLogsConfig: ArtifactRegistryProjectConfigPlatformLogsConfig;
```

- *Type:* <a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigPlatformLogsConfig">ArtifactRegistryProjectConfigPlatformLogsConfig</a>

platform_logs_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/artifact_registry_project_config#platform_logs_config ArtifactRegistryProjectConfig#platform_logs_config}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/artifact_registry_project_config#project ArtifactRegistryProjectConfig#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigConfig.property.timeouts"></a>

```typescript
public readonly timeouts: ArtifactRegistryProjectConfigTimeouts;
```

- *Type:* <a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigTimeouts">ArtifactRegistryProjectConfigTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/artifact_registry_project_config#timeouts ArtifactRegistryProjectConfig#timeouts}

---

### ArtifactRegistryProjectConfigPlatformLogsConfig <a name="ArtifactRegistryProjectConfigPlatformLogsConfig" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigPlatformLogsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigPlatformLogsConfig.Initializer"></a>

```typescript
import { artifactRegistryProjectConfig } from '@cdktn/provider-google'

const artifactRegistryProjectConfigPlatformLogsConfig: artifactRegistryProjectConfig.ArtifactRegistryProjectConfigPlatformLogsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigPlatformLogsConfig.property.loggingState">loggingState</a></code> | <code>string</code> | The state of the platform logs: enabled or disabled. Possible values: ["ENABLED", "DISABLED"]. |
| <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigPlatformLogsConfig.property.severityLevel">severityLevel</a></code> | <code>string</code> | The severity level for the logs. |

---

##### `loggingState`<sup>Optional</sup> <a name="loggingState" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigPlatformLogsConfig.property.loggingState"></a>

```typescript
public readonly loggingState: string;
```

- *Type:* string

The state of the platform logs: enabled or disabled. Possible values: ["ENABLED", "DISABLED"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/artifact_registry_project_config#logging_state ArtifactRegistryProjectConfig#logging_state}

---

##### `severityLevel`<sup>Optional</sup> <a name="severityLevel" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigPlatformLogsConfig.property.severityLevel"></a>

```typescript
public readonly severityLevel: string;
```

- *Type:* string

The severity level for the logs.

Logs will be generated if their
severity level is >= than the value of the severity level mentioned here. Possible values: ["DEBUG", "INFO", "NOTICE", "WARNING", "ERROR", "CRITICAL", "ALERT", "EMERGENCY"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/artifact_registry_project_config#severity_level ArtifactRegistryProjectConfig#severity_level}

---

### ArtifactRegistryProjectConfigTimeouts <a name="ArtifactRegistryProjectConfigTimeouts" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigTimeouts.Initializer"></a>

```typescript
import { artifactRegistryProjectConfig } from '@cdktn/provider-google'

const artifactRegistryProjectConfigTimeouts: artifactRegistryProjectConfig.ArtifactRegistryProjectConfigTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/artifact_registry_project_config#create ArtifactRegistryProjectConfig#create}. |
| <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/artifact_registry_project_config#delete ArtifactRegistryProjectConfig#delete}. |
| <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/artifact_registry_project_config#update ArtifactRegistryProjectConfig#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/artifact_registry_project_config#create ArtifactRegistryProjectConfig#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/artifact_registry_project_config#delete ArtifactRegistryProjectConfig#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/artifact_registry_project_config#update ArtifactRegistryProjectConfig#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ArtifactRegistryProjectConfigPlatformLogsConfigOutputReference <a name="ArtifactRegistryProjectConfigPlatformLogsConfigOutputReference" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigPlatformLogsConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigPlatformLogsConfigOutputReference.Initializer"></a>

```typescript
import { artifactRegistryProjectConfig } from '@cdktn/provider-google'

new artifactRegistryProjectConfig.ArtifactRegistryProjectConfigPlatformLogsConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigPlatformLogsConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigPlatformLogsConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigPlatformLogsConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigPlatformLogsConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigPlatformLogsConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigPlatformLogsConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigPlatformLogsConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigPlatformLogsConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigPlatformLogsConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigPlatformLogsConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigPlatformLogsConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigPlatformLogsConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigPlatformLogsConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigPlatformLogsConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigPlatformLogsConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigPlatformLogsConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigPlatformLogsConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigPlatformLogsConfigOutputReference.resetLoggingState">resetLoggingState</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigPlatformLogsConfigOutputReference.resetSeverityLevel">resetSeverityLevel</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigPlatformLogsConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigPlatformLogsConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigPlatformLogsConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigPlatformLogsConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigPlatformLogsConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigPlatformLogsConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigPlatformLogsConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigPlatformLogsConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigPlatformLogsConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigPlatformLogsConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigPlatformLogsConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigPlatformLogsConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigPlatformLogsConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigPlatformLogsConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigPlatformLogsConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigPlatformLogsConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigPlatformLogsConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigPlatformLogsConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigPlatformLogsConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigPlatformLogsConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigPlatformLogsConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigPlatformLogsConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigPlatformLogsConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigPlatformLogsConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetLoggingState` <a name="resetLoggingState" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigPlatformLogsConfigOutputReference.resetLoggingState"></a>

```typescript
public resetLoggingState(): void
```

##### `resetSeverityLevel` <a name="resetSeverityLevel" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigPlatformLogsConfigOutputReference.resetSeverityLevel"></a>

```typescript
public resetSeverityLevel(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigPlatformLogsConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigPlatformLogsConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigPlatformLogsConfigOutputReference.property.loggingStateInput">loggingStateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigPlatformLogsConfigOutputReference.property.severityLevelInput">severityLevelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigPlatformLogsConfigOutputReference.property.loggingState">loggingState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigPlatformLogsConfigOutputReference.property.severityLevel">severityLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigPlatformLogsConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigPlatformLogsConfig">ArtifactRegistryProjectConfigPlatformLogsConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigPlatformLogsConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigPlatformLogsConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `loggingStateInput`<sup>Optional</sup> <a name="loggingStateInput" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigPlatformLogsConfigOutputReference.property.loggingStateInput"></a>

```typescript
public readonly loggingStateInput: string;
```

- *Type:* string

---

##### `severityLevelInput`<sup>Optional</sup> <a name="severityLevelInput" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigPlatformLogsConfigOutputReference.property.severityLevelInput"></a>

```typescript
public readonly severityLevelInput: string;
```

- *Type:* string

---

##### `loggingState`<sup>Required</sup> <a name="loggingState" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigPlatformLogsConfigOutputReference.property.loggingState"></a>

```typescript
public readonly loggingState: string;
```

- *Type:* string

---

##### `severityLevel`<sup>Required</sup> <a name="severityLevel" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigPlatformLogsConfigOutputReference.property.severityLevel"></a>

```typescript
public readonly severityLevel: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigPlatformLogsConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ArtifactRegistryProjectConfigPlatformLogsConfig;
```

- *Type:* <a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigPlatformLogsConfig">ArtifactRegistryProjectConfigPlatformLogsConfig</a>

---


### ArtifactRegistryProjectConfigTimeoutsOutputReference <a name="ArtifactRegistryProjectConfigTimeoutsOutputReference" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigTimeoutsOutputReference.Initializer"></a>

```typescript
import { artifactRegistryProjectConfig } from '@cdktn/provider-google'

new artifactRegistryProjectConfig.ArtifactRegistryProjectConfigTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigTimeouts">ArtifactRegistryProjectConfigTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ArtifactRegistryProjectConfigTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.artifactRegistryProjectConfig.ArtifactRegistryProjectConfigTimeouts">ArtifactRegistryProjectConfigTimeouts</a>

---



