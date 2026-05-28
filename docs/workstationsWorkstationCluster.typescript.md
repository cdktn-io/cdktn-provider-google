# `workstationsWorkstationCluster` Submodule <a name="`workstationsWorkstationCluster` Submodule" id="@cdktn/provider-google.workstationsWorkstationCluster"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### WorkstationsWorkstationCluster <a name="WorkstationsWorkstationCluster" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/workstations_workstation_cluster google_workstations_workstation_cluster}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.Initializer"></a>

```typescript
import { workstationsWorkstationCluster } from '@cdktn/provider-google'

new workstationsWorkstationCluster.WorkstationsWorkstationCluster(scope: Construct, id: string, config: WorkstationsWorkstationClusterConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterConfig">WorkstationsWorkstationClusterConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterConfig">WorkstationsWorkstationClusterConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.putDomainConfig">putDomainConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.putPrivateClusterConfig">putPrivateClusterConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.resetAnnotations">resetAnnotations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.resetDeletionPolicy">resetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.resetDomainConfig">resetDomainConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.resetLocation">resetLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.resetPrivateClusterConfig">resetPrivateClusterConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.resetWorkstationAuthorizationUrl">resetWorkstationAuthorizationUrl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.resetWorkstationLaunchUrl">resetWorkstationLaunchUrl</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putDomainConfig` <a name="putDomainConfig" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.putDomainConfig"></a>

```typescript
public putDomainConfig(value: WorkstationsWorkstationClusterDomainConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.putDomainConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterDomainConfig">WorkstationsWorkstationClusterDomainConfig</a>

---

##### `putPrivateClusterConfig` <a name="putPrivateClusterConfig" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.putPrivateClusterConfig"></a>

```typescript
public putPrivateClusterConfig(value: WorkstationsWorkstationClusterPrivateClusterConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.putPrivateClusterConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterPrivateClusterConfig">WorkstationsWorkstationClusterPrivateClusterConfig</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.putTimeouts"></a>

```typescript
public putTimeouts(value: WorkstationsWorkstationClusterTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterTimeouts">WorkstationsWorkstationClusterTimeouts</a>

---

##### `resetAnnotations` <a name="resetAnnotations" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.resetAnnotations"></a>

```typescript
public resetAnnotations(): void
```

##### `resetDeletionPolicy` <a name="resetDeletionPolicy" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.resetDeletionPolicy"></a>

```typescript
public resetDeletionPolicy(): void
```

##### `resetDisplayName` <a name="resetDisplayName" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.resetDisplayName"></a>

```typescript
public resetDisplayName(): void
```

##### `resetDomainConfig` <a name="resetDomainConfig" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.resetDomainConfig"></a>

```typescript
public resetDomainConfig(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLabels` <a name="resetLabels" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.resetLabels"></a>

```typescript
public resetLabels(): void
```

##### `resetLocation` <a name="resetLocation" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.resetLocation"></a>

```typescript
public resetLocation(): void
```

##### `resetPrivateClusterConfig` <a name="resetPrivateClusterConfig" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.resetPrivateClusterConfig"></a>

```typescript
public resetPrivateClusterConfig(): void
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetWorkstationAuthorizationUrl` <a name="resetWorkstationAuthorizationUrl" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.resetWorkstationAuthorizationUrl"></a>

```typescript
public resetWorkstationAuthorizationUrl(): void
```

##### `resetWorkstationLaunchUrl` <a name="resetWorkstationLaunchUrl" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.resetWorkstationLaunchUrl"></a>

```typescript
public resetWorkstationLaunchUrl(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a WorkstationsWorkstationCluster resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.isConstruct"></a>

```typescript
import { workstationsWorkstationCluster } from '@cdktn/provider-google'

workstationsWorkstationCluster.WorkstationsWorkstationCluster.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.isTerraformElement"></a>

```typescript
import { workstationsWorkstationCluster } from '@cdktn/provider-google'

workstationsWorkstationCluster.WorkstationsWorkstationCluster.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.isTerraformResource"></a>

```typescript
import { workstationsWorkstationCluster } from '@cdktn/provider-google'

workstationsWorkstationCluster.WorkstationsWorkstationCluster.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.generateConfigForImport"></a>

```typescript
import { workstationsWorkstationCluster } from '@cdktn/provider-google'

workstationsWorkstationCluster.WorkstationsWorkstationCluster.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a WorkstationsWorkstationCluster resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the WorkstationsWorkstationCluster to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing WorkstationsWorkstationCluster that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/workstations_workstation_cluster#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the WorkstationsWorkstationCluster to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.property.conditions">conditions</a></code> | <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterConditionsList">WorkstationsWorkstationClusterConditionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.property.controlPlaneIp">controlPlaneIp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.property.createTime">createTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.property.degraded">degraded</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.property.domainConfig">domainConfig</a></code> | <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterDomainConfigOutputReference">WorkstationsWorkstationClusterDomainConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.property.effectiveAnnotations">effectiveAnnotations</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.property.effectiveLabels">effectiveLabels</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.property.etag">etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.property.privateClusterConfig">privateClusterConfig</a></code> | <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterPrivateClusterConfigOutputReference">WorkstationsWorkstationClusterPrivateClusterConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.property.terraformLabels">terraformLabels</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterTimeoutsOutputReference">WorkstationsWorkstationClusterTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.property.uid">uid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.property.annotationsInput">annotationsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.property.deletionPolicyInput">deletionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.property.domainConfigInput">domainConfigInput</a></code> | <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterDomainConfig">WorkstationsWorkstationClusterDomainConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.property.labelsInput">labelsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.property.networkInput">networkInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.property.privateClusterConfigInput">privateClusterConfigInput</a></code> | <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterPrivateClusterConfig">WorkstationsWorkstationClusterPrivateClusterConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.property.subnetworkInput">subnetworkInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterTimeouts">WorkstationsWorkstationClusterTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.property.workstationAuthorizationUrlInput">workstationAuthorizationUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.property.workstationClusterIdInput">workstationClusterIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.property.workstationLaunchUrlInput">workstationLaunchUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.property.annotations">annotations</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.property.network">network</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.property.subnetwork">subnetwork</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.property.workstationAuthorizationUrl">workstationAuthorizationUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.property.workstationClusterId">workstationClusterId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.property.workstationLaunchUrl">workstationLaunchUrl</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `conditions`<sup>Required</sup> <a name="conditions" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.property.conditions"></a>

```typescript
public readonly conditions: WorkstationsWorkstationClusterConditionsList;
```

- *Type:* <a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterConditionsList">WorkstationsWorkstationClusterConditionsList</a>

---

##### `controlPlaneIp`<sup>Required</sup> <a name="controlPlaneIp" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.property.controlPlaneIp"></a>

```typescript
public readonly controlPlaneIp: string;
```

- *Type:* string

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.property.createTime"></a>

```typescript
public readonly createTime: string;
```

- *Type:* string

---

##### `degraded`<sup>Required</sup> <a name="degraded" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.property.degraded"></a>

```typescript
public readonly degraded: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `domainConfig`<sup>Required</sup> <a name="domainConfig" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.property.domainConfig"></a>

```typescript
public readonly domainConfig: WorkstationsWorkstationClusterDomainConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterDomainConfigOutputReference">WorkstationsWorkstationClusterDomainConfigOutputReference</a>

---

##### `effectiveAnnotations`<sup>Required</sup> <a name="effectiveAnnotations" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.property.effectiveAnnotations"></a>

```typescript
public readonly effectiveAnnotations: StringMap;
```

- *Type:* cdktn.StringMap

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.property.effectiveLabels"></a>

```typescript
public readonly effectiveLabels: StringMap;
```

- *Type:* cdktn.StringMap

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.property.etag"></a>

```typescript
public readonly etag: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `privateClusterConfig`<sup>Required</sup> <a name="privateClusterConfig" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.property.privateClusterConfig"></a>

```typescript
public readonly privateClusterConfig: WorkstationsWorkstationClusterPrivateClusterConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterPrivateClusterConfigOutputReference">WorkstationsWorkstationClusterPrivateClusterConfigOutputReference</a>

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.property.terraformLabels"></a>

```typescript
public readonly terraformLabels: StringMap;
```

- *Type:* cdktn.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.property.timeouts"></a>

```typescript
public readonly timeouts: WorkstationsWorkstationClusterTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterTimeoutsOutputReference">WorkstationsWorkstationClusterTimeoutsOutputReference</a>

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.property.uid"></a>

```typescript
public readonly uid: string;
```

- *Type:* string

---

##### `annotationsInput`<sup>Optional</sup> <a name="annotationsInput" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.property.annotationsInput"></a>

```typescript
public readonly annotationsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `deletionPolicyInput`<sup>Optional</sup> <a name="deletionPolicyInput" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.property.deletionPolicyInput"></a>

```typescript
public readonly deletionPolicyInput: string;
```

- *Type:* string

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `domainConfigInput`<sup>Optional</sup> <a name="domainConfigInput" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.property.domainConfigInput"></a>

```typescript
public readonly domainConfigInput: WorkstationsWorkstationClusterDomainConfig;
```

- *Type:* <a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterDomainConfig">WorkstationsWorkstationClusterDomainConfig</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.property.labelsInput"></a>

```typescript
public readonly labelsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `networkInput`<sup>Optional</sup> <a name="networkInput" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.property.networkInput"></a>

```typescript
public readonly networkInput: string;
```

- *Type:* string

---

##### `privateClusterConfigInput`<sup>Optional</sup> <a name="privateClusterConfigInput" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.property.privateClusterConfigInput"></a>

```typescript
public readonly privateClusterConfigInput: WorkstationsWorkstationClusterPrivateClusterConfig;
```

- *Type:* <a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterPrivateClusterConfig">WorkstationsWorkstationClusterPrivateClusterConfig</a>

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `subnetworkInput`<sup>Optional</sup> <a name="subnetworkInput" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.property.subnetworkInput"></a>

```typescript
public readonly subnetworkInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | WorkstationsWorkstationClusterTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterTimeouts">WorkstationsWorkstationClusterTimeouts</a>

---

##### `workstationAuthorizationUrlInput`<sup>Optional</sup> <a name="workstationAuthorizationUrlInput" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.property.workstationAuthorizationUrlInput"></a>

```typescript
public readonly workstationAuthorizationUrlInput: string;
```

- *Type:* string

---

##### `workstationClusterIdInput`<sup>Optional</sup> <a name="workstationClusterIdInput" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.property.workstationClusterIdInput"></a>

```typescript
public readonly workstationClusterIdInput: string;
```

- *Type:* string

---

##### `workstationLaunchUrlInput`<sup>Optional</sup> <a name="workstationLaunchUrlInput" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.property.workstationLaunchUrlInput"></a>

```typescript
public readonly workstationLaunchUrlInput: string;
```

- *Type:* string

---

##### `annotations`<sup>Required</sup> <a name="annotations" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.property.annotations"></a>

```typescript
public readonly annotations: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.property.deletionPolicy"></a>

```typescript
public readonly deletionPolicy: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.property.network"></a>

```typescript
public readonly network: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `subnetwork`<sup>Required</sup> <a name="subnetwork" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.property.subnetwork"></a>

```typescript
public readonly subnetwork: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `workstationAuthorizationUrl`<sup>Required</sup> <a name="workstationAuthorizationUrl" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.property.workstationAuthorizationUrl"></a>

```typescript
public readonly workstationAuthorizationUrl: string;
```

- *Type:* string

---

##### `workstationClusterId`<sup>Required</sup> <a name="workstationClusterId" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.property.workstationClusterId"></a>

```typescript
public readonly workstationClusterId: string;
```

- *Type:* string

---

##### `workstationLaunchUrl`<sup>Required</sup> <a name="workstationLaunchUrl" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.property.workstationLaunchUrl"></a>

```typescript
public readonly workstationLaunchUrl: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### WorkstationsWorkstationClusterConditions <a name="WorkstationsWorkstationClusterConditions" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterConditions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterConditions.Initializer"></a>

```typescript
import { workstationsWorkstationCluster } from '@cdktn/provider-google'

const workstationsWorkstationClusterConditions: workstationsWorkstationCluster.WorkstationsWorkstationClusterConditions = { ... }
```


### WorkstationsWorkstationClusterConfig <a name="WorkstationsWorkstationClusterConfig" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterConfig.Initializer"></a>

```typescript
import { workstationsWorkstationCluster } from '@cdktn/provider-google'

const workstationsWorkstationClusterConfig: workstationsWorkstationCluster.WorkstationsWorkstationClusterConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterConfig.property.network">network</a></code> | <code>string</code> | The relative resource name of the VPC network on which the instance can be accessed. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterConfig.property.subnetwork">subnetwork</a></code> | <code>string</code> | Name of the Compute Engine subnetwork in which instances associated with this cluster will be created. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterConfig.property.workstationClusterId">workstationClusterId</a></code> | <code>string</code> | ID to use for the workstation cluster. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterConfig.property.annotations">annotations</a></code> | <code>{[ key: string ]: string}</code> | Client-specified annotations. This is distinct from labels. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterConfig.property.displayName">displayName</a></code> | <code>string</code> | Human-readable name for this resource. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterConfig.property.domainConfig">domainConfig</a></code> | <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterDomainConfig">WorkstationsWorkstationClusterDomainConfig</a></code> | domain_config block. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/workstations_workstation_cluster#id WorkstationsWorkstationCluster#id}. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterConfig.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | Client-specified labels that are applied to the resource and that are also propagated to the underlying Compute Engine resources. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterConfig.property.location">location</a></code> | <code>string</code> | The location where the workstation cluster should reside. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterConfig.property.privateClusterConfig">privateClusterConfig</a></code> | <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterPrivateClusterConfig">WorkstationsWorkstationClusterPrivateClusterConfig</a></code> | private_cluster_config block. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/workstations_workstation_cluster#project WorkstationsWorkstationCluster#project}. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Resource manager tags bound to this resource. For example: "123/environment": "production", "123/costCenter": "marketing". |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterTimeouts">WorkstationsWorkstationClusterTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterConfig.property.workstationAuthorizationUrl">workstationAuthorizationUrl</a></code> | <code>string</code> | Specifies the redirect URL for unauthorized requests received by workstation VMs in this cluster. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterConfig.property.workstationLaunchUrl">workstationLaunchUrl</a></code> | <code>string</code> | Specifies the launch URL for workstations in this cluster. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterConfig.property.network"></a>

```typescript
public readonly network: string;
```

- *Type:* string

The relative resource name of the VPC network on which the instance can be accessed.

It is specified in the following form: "projects/{projectNumber}/global/networks/{network_id}".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/workstations_workstation_cluster#network WorkstationsWorkstationCluster#network}

---

##### `subnetwork`<sup>Required</sup> <a name="subnetwork" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterConfig.property.subnetwork"></a>

```typescript
public readonly subnetwork: string;
```

- *Type:* string

Name of the Compute Engine subnetwork in which instances associated with this cluster will be created.

Must be part of the subnetwork specified for this cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/workstations_workstation_cluster#subnetwork WorkstationsWorkstationCluster#subnetwork}

---

##### `workstationClusterId`<sup>Required</sup> <a name="workstationClusterId" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterConfig.property.workstationClusterId"></a>

```typescript
public readonly workstationClusterId: string;
```

- *Type:* string

ID to use for the workstation cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/workstations_workstation_cluster#workstation_cluster_id WorkstationsWorkstationCluster#workstation_cluster_id}

---

##### `annotations`<sup>Optional</sup> <a name="annotations" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterConfig.property.annotations"></a>

```typescript
public readonly annotations: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Client-specified annotations. This is distinct from labels.

**Note**: This field is non-authoritative, and will only manage the annotations present in your configuration.
Please refer to the field 'effective_annotations' for all of the annotations present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/workstations_workstation_cluster#annotations WorkstationsWorkstationCluster#annotations}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterConfig.property.deletionPolicy"></a>

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


Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/workstations_workstation_cluster#deletion_policy WorkstationsWorkstationCluster#deletion_policy}

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

Human-readable name for this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/workstations_workstation_cluster#display_name WorkstationsWorkstationCluster#display_name}

---

##### `domainConfig`<sup>Optional</sup> <a name="domainConfig" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterConfig.property.domainConfig"></a>

```typescript
public readonly domainConfig: WorkstationsWorkstationClusterDomainConfig;
```

- *Type:* <a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterDomainConfig">WorkstationsWorkstationClusterDomainConfig</a>

domain_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/workstations_workstation_cluster#domain_config WorkstationsWorkstationCluster#domain_config}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/workstations_workstation_cluster#id WorkstationsWorkstationCluster#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterConfig.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Client-specified labels that are applied to the resource and that are also propagated to the underlying Compute Engine resources.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/workstations_workstation_cluster#labels WorkstationsWorkstationCluster#labels}

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

The location where the workstation cluster should reside.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/workstations_workstation_cluster#location WorkstationsWorkstationCluster#location}

---

##### `privateClusterConfig`<sup>Optional</sup> <a name="privateClusterConfig" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterConfig.property.privateClusterConfig"></a>

```typescript
public readonly privateClusterConfig: WorkstationsWorkstationClusterPrivateClusterConfig;
```

- *Type:* <a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterPrivateClusterConfig">WorkstationsWorkstationClusterPrivateClusterConfig</a>

private_cluster_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/workstations_workstation_cluster#private_cluster_config WorkstationsWorkstationCluster#private_cluster_config}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/workstations_workstation_cluster#project WorkstationsWorkstationCluster#project}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Resource manager tags bound to this resource. For example: "123/environment": "production", "123/costCenter": "marketing".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/workstations_workstation_cluster#tags WorkstationsWorkstationCluster#tags}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterConfig.property.timeouts"></a>

```typescript
public readonly timeouts: WorkstationsWorkstationClusterTimeouts;
```

- *Type:* <a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterTimeouts">WorkstationsWorkstationClusterTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/workstations_workstation_cluster#timeouts WorkstationsWorkstationCluster#timeouts}

---

##### `workstationAuthorizationUrl`<sup>Optional</sup> <a name="workstationAuthorizationUrl" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterConfig.property.workstationAuthorizationUrl"></a>

```typescript
public readonly workstationAuthorizationUrl: string;
```

- *Type:* string

Specifies the redirect URL for unauthorized requests received by workstation VMs in this cluster.

Redirects to this endpoint will send a base64 encoded 'state' query param containing the target workstation name and original request hostname. The endpoint is responsible for retrieving a token using 'GenerateAccessToken' and redirecting back to the original hostname with the token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/workstations_workstation_cluster#workstation_authorization_url WorkstationsWorkstationCluster#workstation_authorization_url}

---

##### `workstationLaunchUrl`<sup>Optional</sup> <a name="workstationLaunchUrl" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterConfig.property.workstationLaunchUrl"></a>

```typescript
public readonly workstationLaunchUrl: string;
```

- *Type:* string

Specifies the launch URL for workstations in this cluster.

Requests sent to unstarted workstations will be redirected to this URL.
Requests redirected to the launch endpoint will be sent with a 'workstation' query parameter containing the full workstation resource. The launch endpoint is responsible for starting the workstation, polling it until it reaches 'STATE_RUNNING', and then issuing a redirect to the workstation's host URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/workstations_workstation_cluster#workstation_launch_url WorkstationsWorkstationCluster#workstation_launch_url}

---

### WorkstationsWorkstationClusterDomainConfig <a name="WorkstationsWorkstationClusterDomainConfig" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterDomainConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterDomainConfig.Initializer"></a>

```typescript
import { workstationsWorkstationCluster } from '@cdktn/provider-google'

const workstationsWorkstationClusterDomainConfig: workstationsWorkstationCluster.WorkstationsWorkstationClusterDomainConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterDomainConfig.property.domain">domain</a></code> | <code>string</code> | Domain used by Workstations for HTTP ingress. |

---

##### `domain`<sup>Required</sup> <a name="domain" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterDomainConfig.property.domain"></a>

```typescript
public readonly domain: string;
```

- *Type:* string

Domain used by Workstations for HTTP ingress.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/workstations_workstation_cluster#domain WorkstationsWorkstationCluster#domain}

---

### WorkstationsWorkstationClusterPrivateClusterConfig <a name="WorkstationsWorkstationClusterPrivateClusterConfig" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterPrivateClusterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterPrivateClusterConfig.Initializer"></a>

```typescript
import { workstationsWorkstationCluster } from '@cdktn/provider-google'

const workstationsWorkstationClusterPrivateClusterConfig: workstationsWorkstationCluster.WorkstationsWorkstationClusterPrivateClusterConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterPrivateClusterConfig.property.enablePrivateEndpoint">enablePrivateEndpoint</a></code> | <code>boolean \| cdktn.IResolvable</code> | Whether Workstations endpoint is private. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterPrivateClusterConfig.property.allowedProjects">allowedProjects</a></code> | <code>string[]</code> | Additional project IDs that are allowed to attach to the workstation cluster's service attachment. |

---

##### `enablePrivateEndpoint`<sup>Required</sup> <a name="enablePrivateEndpoint" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterPrivateClusterConfig.property.enablePrivateEndpoint"></a>

```typescript
public readonly enablePrivateEndpoint: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Whether Workstations endpoint is private.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/workstations_workstation_cluster#enable_private_endpoint WorkstationsWorkstationCluster#enable_private_endpoint}

---

##### `allowedProjects`<sup>Optional</sup> <a name="allowedProjects" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterPrivateClusterConfig.property.allowedProjects"></a>

```typescript
public readonly allowedProjects: string[];
```

- *Type:* string[]

Additional project IDs that are allowed to attach to the workstation cluster's service attachment.

By default, the workstation cluster's project and the VPC host project (if different) are allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/workstations_workstation_cluster#allowed_projects WorkstationsWorkstationCluster#allowed_projects}

---

### WorkstationsWorkstationClusterTimeouts <a name="WorkstationsWorkstationClusterTimeouts" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterTimeouts.Initializer"></a>

```typescript
import { workstationsWorkstationCluster } from '@cdktn/provider-google'

const workstationsWorkstationClusterTimeouts: workstationsWorkstationCluster.WorkstationsWorkstationClusterTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/workstations_workstation_cluster#create WorkstationsWorkstationCluster#create}. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/workstations_workstation_cluster#delete WorkstationsWorkstationCluster#delete}. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/workstations_workstation_cluster#update WorkstationsWorkstationCluster#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/workstations_workstation_cluster#create WorkstationsWorkstationCluster#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/workstations_workstation_cluster#delete WorkstationsWorkstationCluster#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/workstations_workstation_cluster#update WorkstationsWorkstationCluster#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### WorkstationsWorkstationClusterConditionsList <a name="WorkstationsWorkstationClusterConditionsList" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterConditionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterConditionsList.Initializer"></a>

```typescript
import { workstationsWorkstationCluster } from '@cdktn/provider-google'

new workstationsWorkstationCluster.WorkstationsWorkstationClusterConditionsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterConditionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterConditionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterConditionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterConditionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterConditionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterConditionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterConditionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterConditionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterConditionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterConditionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterConditionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterConditionsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterConditionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterConditionsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterConditionsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterConditionsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterConditionsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterConditionsList.get"></a>

```typescript
public get(index: number): WorkstationsWorkstationClusterConditionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterConditionsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterConditionsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterConditionsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterConditionsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterConditionsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### WorkstationsWorkstationClusterConditionsOutputReference <a name="WorkstationsWorkstationClusterConditionsOutputReference" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterConditionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterConditionsOutputReference.Initializer"></a>

```typescript
import { workstationsWorkstationCluster } from '@cdktn/provider-google'

new workstationsWorkstationCluster.WorkstationsWorkstationClusterConditionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterConditionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterConditionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterConditionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterConditionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterConditionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterConditionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterConditionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterConditionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterConditionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterConditionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterConditionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterConditionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterConditionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterConditionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterConditionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterConditionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterConditionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterConditionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterConditionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterConditionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterConditionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterConditionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterConditionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterConditionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterConditionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterConditionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterConditionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterConditionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterConditionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterConditionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterConditionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterConditionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterConditionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterConditionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterConditionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterConditionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterConditionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterConditionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterConditionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterConditionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterConditionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterConditionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterConditionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterConditionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterConditionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterConditionsOutputReference.property.code">code</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterConditionsOutputReference.property.details">details</a></code> | <code>cdktn.StringMapList</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterConditionsOutputReference.property.message">message</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterConditionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterConditions">WorkstationsWorkstationClusterConditions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterConditionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterConditionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `code`<sup>Required</sup> <a name="code" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterConditionsOutputReference.property.code"></a>

```typescript
public readonly code: number;
```

- *Type:* number

---

##### `details`<sup>Required</sup> <a name="details" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterConditionsOutputReference.property.details"></a>

```typescript
public readonly details: StringMapList;
```

- *Type:* cdktn.StringMapList

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterConditionsOutputReference.property.message"></a>

```typescript
public readonly message: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterConditionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: WorkstationsWorkstationClusterConditions;
```

- *Type:* <a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterConditions">WorkstationsWorkstationClusterConditions</a>

---


### WorkstationsWorkstationClusterDomainConfigOutputReference <a name="WorkstationsWorkstationClusterDomainConfigOutputReference" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterDomainConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterDomainConfigOutputReference.Initializer"></a>

```typescript
import { workstationsWorkstationCluster } from '@cdktn/provider-google'

new workstationsWorkstationCluster.WorkstationsWorkstationClusterDomainConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterDomainConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterDomainConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterDomainConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterDomainConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterDomainConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterDomainConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterDomainConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterDomainConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterDomainConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterDomainConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterDomainConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterDomainConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterDomainConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterDomainConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterDomainConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterDomainConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterDomainConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterDomainConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterDomainConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterDomainConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterDomainConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterDomainConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterDomainConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterDomainConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterDomainConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterDomainConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterDomainConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterDomainConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterDomainConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterDomainConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterDomainConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterDomainConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterDomainConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterDomainConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterDomainConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterDomainConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterDomainConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterDomainConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterDomainConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterDomainConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterDomainConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterDomainConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterDomainConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterDomainConfigOutputReference.property.domainInput">domainInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterDomainConfigOutputReference.property.domain">domain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterDomainConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterDomainConfig">WorkstationsWorkstationClusterDomainConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterDomainConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterDomainConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `domainInput`<sup>Optional</sup> <a name="domainInput" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterDomainConfigOutputReference.property.domainInput"></a>

```typescript
public readonly domainInput: string;
```

- *Type:* string

---

##### `domain`<sup>Required</sup> <a name="domain" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterDomainConfigOutputReference.property.domain"></a>

```typescript
public readonly domain: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterDomainConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: WorkstationsWorkstationClusterDomainConfig;
```

- *Type:* <a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterDomainConfig">WorkstationsWorkstationClusterDomainConfig</a>

---


### WorkstationsWorkstationClusterPrivateClusterConfigOutputReference <a name="WorkstationsWorkstationClusterPrivateClusterConfigOutputReference" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterPrivateClusterConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterPrivateClusterConfigOutputReference.Initializer"></a>

```typescript
import { workstationsWorkstationCluster } from '@cdktn/provider-google'

new workstationsWorkstationCluster.WorkstationsWorkstationClusterPrivateClusterConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterPrivateClusterConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterPrivateClusterConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterPrivateClusterConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterPrivateClusterConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterPrivateClusterConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterPrivateClusterConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterPrivateClusterConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterPrivateClusterConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterPrivateClusterConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterPrivateClusterConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterPrivateClusterConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterPrivateClusterConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterPrivateClusterConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterPrivateClusterConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterPrivateClusterConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterPrivateClusterConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterPrivateClusterConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterPrivateClusterConfigOutputReference.resetAllowedProjects">resetAllowedProjects</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterPrivateClusterConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterPrivateClusterConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterPrivateClusterConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterPrivateClusterConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterPrivateClusterConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterPrivateClusterConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterPrivateClusterConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterPrivateClusterConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterPrivateClusterConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterPrivateClusterConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterPrivateClusterConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterPrivateClusterConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterPrivateClusterConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterPrivateClusterConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterPrivateClusterConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterPrivateClusterConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterPrivateClusterConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterPrivateClusterConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterPrivateClusterConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterPrivateClusterConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterPrivateClusterConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterPrivateClusterConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterPrivateClusterConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterPrivateClusterConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAllowedProjects` <a name="resetAllowedProjects" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterPrivateClusterConfigOutputReference.resetAllowedProjects"></a>

```typescript
public resetAllowedProjects(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterPrivateClusterConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterPrivateClusterConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterPrivateClusterConfigOutputReference.property.clusterHostname">clusterHostname</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterPrivateClusterConfigOutputReference.property.serviceAttachmentUri">serviceAttachmentUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterPrivateClusterConfigOutputReference.property.allowedProjectsInput">allowedProjectsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterPrivateClusterConfigOutputReference.property.enablePrivateEndpointInput">enablePrivateEndpointInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterPrivateClusterConfigOutputReference.property.allowedProjects">allowedProjects</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterPrivateClusterConfigOutputReference.property.enablePrivateEndpoint">enablePrivateEndpoint</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterPrivateClusterConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterPrivateClusterConfig">WorkstationsWorkstationClusterPrivateClusterConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterPrivateClusterConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterPrivateClusterConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `clusterHostname`<sup>Required</sup> <a name="clusterHostname" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterPrivateClusterConfigOutputReference.property.clusterHostname"></a>

```typescript
public readonly clusterHostname: string;
```

- *Type:* string

---

##### `serviceAttachmentUri`<sup>Required</sup> <a name="serviceAttachmentUri" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterPrivateClusterConfigOutputReference.property.serviceAttachmentUri"></a>

```typescript
public readonly serviceAttachmentUri: string;
```

- *Type:* string

---

##### `allowedProjectsInput`<sup>Optional</sup> <a name="allowedProjectsInput" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterPrivateClusterConfigOutputReference.property.allowedProjectsInput"></a>

```typescript
public readonly allowedProjectsInput: string[];
```

- *Type:* string[]

---

##### `enablePrivateEndpointInput`<sup>Optional</sup> <a name="enablePrivateEndpointInput" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterPrivateClusterConfigOutputReference.property.enablePrivateEndpointInput"></a>

```typescript
public readonly enablePrivateEndpointInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `allowedProjects`<sup>Required</sup> <a name="allowedProjects" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterPrivateClusterConfigOutputReference.property.allowedProjects"></a>

```typescript
public readonly allowedProjects: string[];
```

- *Type:* string[]

---

##### `enablePrivateEndpoint`<sup>Required</sup> <a name="enablePrivateEndpoint" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterPrivateClusterConfigOutputReference.property.enablePrivateEndpoint"></a>

```typescript
public readonly enablePrivateEndpoint: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterPrivateClusterConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: WorkstationsWorkstationClusterPrivateClusterConfig;
```

- *Type:* <a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterPrivateClusterConfig">WorkstationsWorkstationClusterPrivateClusterConfig</a>

---


### WorkstationsWorkstationClusterTimeoutsOutputReference <a name="WorkstationsWorkstationClusterTimeoutsOutputReference" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterTimeoutsOutputReference.Initializer"></a>

```typescript
import { workstationsWorkstationCluster } from '@cdktn/provider-google'

new workstationsWorkstationCluster.WorkstationsWorkstationClusterTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterTimeouts">WorkstationsWorkstationClusterTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | WorkstationsWorkstationClusterTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterTimeouts">WorkstationsWorkstationClusterTimeouts</a>

---



